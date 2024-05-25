import getSystemdServiceStatus from "../../modules/systemd/getSystemdServiceStatus";

interface IOptions {
    
}

export default async function watchREPLCommand (services: string[], options: IOptions) {
    const output = await getSystemdServiceStatus(services[0]);
    
    console.log(output);
}