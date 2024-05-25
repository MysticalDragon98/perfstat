import executeShellCommand from "../../../plugins/shell/lib/modules/executeShellCommand";

export default async function getSystemdServiceStatus (serviceId: string) {
    return executeShellCommand("sudo", ["systemctl", "status", serviceId]);
}