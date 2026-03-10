import { useMutation, useQuery } from "@tanstack/react-query";
import type { Experience, Project } from "../backend.d";
import { useActor } from "./useActor";

export interface AboutData {
  bio: string;
  skills: string[];
}

export function useGetAbout() {
  const { actor, isFetching } = useActor();
  return useQuery<AboutData>({
    queryKey: ["about"],
    queryFn: async () => {
      if (!actor) return { bio: "", skills: [] };
      return actor.getAbout();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetProjects() {
  const { actor, isFetching } = useActor();
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetExperiences() {
  const { actor, isFetching } = useActor();
  return useQuery<Experience[]>({
    queryKey: ["experiences"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getExperiences();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitMessage() {
  const { actor } = useActor();
  return useMutation<
    bigint,
    Error,
    { name: string; email: string; message: string }
  >({
    mutationFn: async ({ name, email, message }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitMessage(name, email, message);
    },
  });
}
