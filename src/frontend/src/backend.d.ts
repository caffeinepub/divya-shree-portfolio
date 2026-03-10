import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactMessage {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface Project {
    id: bigint;
    url?: string;
    title: string;
    description: string;
    techStack: Array<string>;
}
export interface Experience {
    id: bigint;
    startYear: bigint;
    endYear?: bigint;
    role: string;
    description: string;
    company: string;
}
export interface backendInterface {
    addExperience(company: string, role: string, startYear: bigint, endYear: bigint | null, description: string): Promise<bigint>;
    addProject(title: string, description: string, techStack: Array<string>, url: string | null): Promise<bigint>;
    addSkill(skill: string): Promise<void>;
    deleteExperience(id: bigint): Promise<void>;
    deleteProject(id: bigint): Promise<void>;
    getAbout(): Promise<{
        bio: string;
        skills: Array<string>;
    }>;
    getExperiences(): Promise<Array<Experience>>;
    getMessages(): Promise<Array<ContactMessage>>;
    getProjects(): Promise<Array<Project>>;
    removeSkill(skill: string): Promise<void>;
    submitMessage(name: string, email: string, message: string): Promise<bigint>;
    updateBio(newBio: string): Promise<void>;
    updateExperience(id: bigint, company: string, role: string, startYear: bigint, endYear: bigint | null, description: string): Promise<void>;
    updateProject(id: bigint, title: string, description: string, techStack: Array<string>, url: string | null): Promise<void>;
}
