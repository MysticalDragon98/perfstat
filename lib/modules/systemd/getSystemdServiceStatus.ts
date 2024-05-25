import executeShellCommand from "../../../plugins/shell/lib/modules/executeShellCommand";

export default function getSystemdServiceStatus (serviceId: string) {
    return await executeShellCommand("sudo", ["systemctl", "status", serviceId]);
}