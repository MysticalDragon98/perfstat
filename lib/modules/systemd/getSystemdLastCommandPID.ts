import getSystemdServiceStatus from "./getSystemdServiceStatus";

export default async function getSystemdLastCommandPID (serviceId: string) {
    const output = getSystemdServiceStatus(serviceId);

    for await (const _line of output.lines("stdout")) {
        const line = _line.trim();
        if (line.startsWith("└─")) {
            console.log(line)
            return parseInt(line.substring(1, line.indexOf(" ")));
        }
    }

    return 0;
}