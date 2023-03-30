export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    this.bio = data.bio
    this.github = data.github
    this.coverImg = data.coverImg
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class
    this.graduated = data.graduated
  }
}

export class Account extends Profile {
  constructor(data) {
    super(data)
    this.email = data.email
  }
}
