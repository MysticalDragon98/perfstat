export default interface ISystemdServiceStatusOutput {
    serviceId: string;
    description: string;
    
    pid: {
        main: number;
    };
    memory: string;
    cpu: string;

}