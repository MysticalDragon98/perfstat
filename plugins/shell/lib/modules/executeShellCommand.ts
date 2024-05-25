import { spawn } from "child_process";
import ShellCommandOutput from "../classes/ShellCommandOutput";

export default function executeShellCommand (command: string, args: string[]){
    const child = spawn(command, args);

    child.on('error', (err) => {
        console.error(`Error running command: ${command} ${args.join(" ")}`);
        console.error(err);
    });

    return new ShellCommandOutput(child);
}