import { getJobs } from "./db/jobs.js";

export const resolvers = {
  Query: {
    greeting: () => "Hello friend!",
    jobs: () => getJobs(),
  },
};
