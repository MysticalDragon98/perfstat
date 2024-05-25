import { spawn } from "child_process";
import ShellCommandOutput from "../classes/ShellCommandOutput";

export default function executeShellCommand (command: string, args: string[]){
    const child = spawn(command, args);

    child.on('error', (err) => {
        console.error(`Error running command: ${command} ${args.join(" ")}`);
        console.error(err);
    });

    child.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Command ${command} ${args.join(" ")} exited with code ${code}`);
        }
    });

    child.on('close', (code) => {
        if (code !== 0) {
            console.error(`Command ${command} ${args.join(" ")} closed with code ${code}`);
        }
    });

    return new ShellCommandOutput(child);
}