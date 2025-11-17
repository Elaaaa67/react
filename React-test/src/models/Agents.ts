
export default class Agent {
  uuid: string;
  displayName: string;
  role: string;
  release_date: Date;
  description?: string;
  full_portrait: string | null | undefined;
  display_name: string | undefined;

  constructor(
    uuid: string,
    displayName: string,
    role: string = "N/A",
    fullPortrait: string | null = null,
    release_date?: Date,
    description?: string
  ) {
    this.uuid = uuid;
    this.displayName = displayName;
    this.role = role;
    this.full_portrait = fullPortrait;
    this.release_date = release_date || new Date();
    this.description = description;
  }
}
