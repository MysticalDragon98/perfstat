import executeShellCommand from "../../../plugins/shell/lib/modules/executeShellCommand";
import ISystemdServiceStatusOutput from "../../interfaces/SystemdServiceStatusOutput.interface";

const header = /●\s+(?<serviceId>.+?)\s+\-\s+\"(<description>.+)\"/;

export default async function getSystemdServiceStatus (serviceId: string) {
    const lines = await executeShellCommand("sudo", ["systemctl", "status", serviceId]).lines("stdout");
    const output: ISystemdServiceStatusOutput = <any>{};

    for await (const _line of lines) {
        const line = _line.trim();

        if (line.startsWith("●")) {
            const match = header.exec(line);

            if (match) {
                output.serviceId = match.groups.serviceId;
                output.description = match.groups.description;
            }
        }
    }

    return output;
}