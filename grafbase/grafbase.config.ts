import { g, auth, config } from "@grafbase/sdk";
const User = g.model("User", {
  name: g.string(),
  email: g.email().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Projects).list().optional(),
});

const Projects = g.model("Projects", {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url().optional(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
});
export default config({
  schema: g,
});
