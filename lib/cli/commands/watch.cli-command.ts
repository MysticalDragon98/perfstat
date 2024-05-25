import getSystemdLastCommandPID from "../../modules/systemd/getSystemdLastCommandPID";

interface IOptions {
    
}

export default async function watchREPLCommand (services: string[], options: IOptions) {
    for (const service of services) {
        const pid = await getSystemdLastCommandPID(service);
        console.log(`${service} is running with PID ${pid}`);
    }
}