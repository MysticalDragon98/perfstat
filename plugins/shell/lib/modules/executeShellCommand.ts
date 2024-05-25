import { spawn } from "child_process";
import ShellCommandOutput from "../classes/ShellCommandOutput";

export default function executeShellCommand (command: string, args: string[]){
    const child = spawn(command, args);

    return new ShellCommandOutput(child);
}