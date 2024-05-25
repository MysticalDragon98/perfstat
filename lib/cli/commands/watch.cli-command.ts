import { ok } from "assert";
import getSystemdLastCommandPID from "../../modules/systemd/getSystemdLastCommandPID";
import executeShellCommand from "../../../plugins/shell/lib/modules/executeShellCommand";

const PerfOutputRegex = /\s+(?<time>.+?)\s+(?<counts>.+?).+/;

interface IOptions {
    interval: string;
}

export default async function watchREPLCommand (services: string[], options: IOptions) {
    await Promise.all(services.map(async service => {
        const pid = await getSystemdLastCommandPID(service);
        ok(pid, `Could not find PID for service ${service}`);

        const stats = executeShellCommand("sudo", ["perf", "stat", "-p", pid.toString(), "-I", options.interval ?? "5000"]).lines("stderr");
        
        for await (const _line of stats) {
            const line = _line.trim();

            console.log("Line:", line);

            if (line.startsWith("#")) continue;

            const match = line.match(PerfOutputRegex);
            console.log("Match:", match);
            if (!match) continue;

            const { time, counts } = match.groups!;
            console.log(`${service} ${time} ${counts}`);
        }
    }));
}