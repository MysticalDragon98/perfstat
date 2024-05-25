import executeShellCommand from "../../../plugins/shell/lib/modules/executeShellCommand";

export default async function getSystemdServiceStatus (serviceId: string) {
    const output = await executeShellCommand("sudo", ["systemctl", "status", serviceId]).output("stdout");


    return output;
}