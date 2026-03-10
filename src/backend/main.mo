import Array "mo:core/Array";
import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Order "mo:core/Order";

actor {
  type Project = {
    id : Nat;
    title : Text;
    description : Text;
    techStack : [Text];
    url : ?Text;
  };

  module Project {
    public func compare(p1 : Project, p2 : Project) : Order.Order {
      if (p1.id < p2.id) { #less } else if (p1.id > p2.id) { #greater } else { #equal };
    };
  };

  type Experience = {
    id : Nat;
    company : Text;
    role : Text;
    startYear : Nat;
    endYear : ?Nat;
    description : Text;
  };

  module Experience {
    public func compare(e1 : Experience, e2 : Experience) : Order.Order {
      if (e1.id < e2.id) { #less } else if (e1.id > e2.id) { #greater } else { #equal };
    };
  };

  type ContactMessage = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactMessage {
    public func compare(cm1 : ContactMessage, cm2 : ContactMessage) : Order.Order {
      if (cm1.id < cm2.id) { #less } else if (cm1.id > cm2.id) { #greater } else {
        #equal;
      };
    };
  };

  // About Section
  type AboutSection = {
    bio : Text;
    skills : List.List<Text>;
  };

  var aboutSection : AboutSection = {
    bio = "";
    skills = List.empty<Text>();
  };

  // Persistent Data Structures
  let projects = Map.empty<Nat, Project>();
  let experiences = Map.empty<Nat, Experience>();
  let messages = Map.empty<Nat, ContactMessage>();

  var nextId = 1;

  // About Section methods
  public shared ({ caller }) func updateBio(newBio : Text) : async () {
    aboutSection := {
      bio = newBio;
      skills = aboutSection.skills;
    };
  };

  public shared ({ caller }) func addSkill(skill : Text) : async () {
    aboutSection.skills.add(skill);
  };

  public shared ({ caller }) func removeSkill(skill : Text) : async () {
    let filteredSkills = List.empty<Text>();
    for (s in aboutSection.skills.values()) {
      if (not Text.equal(s, skill)) {
        filteredSkills.add(s);
      };
    };
    aboutSection := {
      bio = aboutSection.bio;
      skills = filteredSkills;
    };
  };

  public query ({ caller }) func getAbout() : async {
    bio : Text;
    skills : [Text];
  } {
    {
      bio = aboutSection.bio;
      skills = aboutSection.skills.toArray();
    };
  };

  // Projects
  public shared ({ caller }) func addProject(title : Text, description : Text, techStack : [Text], url : ?Text) : async Nat {
    let project : Project = {
      id = nextId;
      title;
      description;
      techStack;
      url;
    };
    projects.add(nextId, project);
    nextId += 1;
    project.id;
  };

  public shared ({ caller }) func updateProject(id : Nat, title : Text, description : Text, techStack : [Text], url : ?Text) : async () {
    switch (projects.get(id)) {
      case (null) { return () };
      case (?_) {
        let updatedProject : Project = {
          id;
          title;
          description;
          techStack;
          url;
        };
        projects.add(id, updatedProject);
      };
    };
  };

  public shared ({ caller }) func deleteProject(id : Nat) : async () {
    projects.remove(id);
  };

  public query ({ caller }) func getProjects() : async [Project] {
    projects.values().toArray().sort();
  };

  // Work Experience
  public shared ({ caller }) func addExperience(company : Text, role : Text, startYear : Nat, endYear : ?Nat, description : Text) : async Nat {
    let experience : Experience = {
      id = nextId;
      company;
      role;
      startYear;
      endYear;
      description;
    };
    experiences.add(nextId, experience);
    nextId += 1;
    experience.id;
  };

  public shared ({ caller }) func updateExperience(id : Nat, company : Text, role : Text, startYear : Nat, endYear : ?Nat, description : Text) : async () {
    switch (experiences.get(id)) {
      case (null) { return () };
      case (?_) {
        let updatedExperience : Experience = {
          id;
          company;
          role;
          startYear;
          endYear;
          description;
        };
        experiences.add(id, updatedExperience);
      };
    };
  };

  public shared ({ caller }) func deleteExperience(id : Nat) : async () {
    experiences.remove(id);
  };

  public query ({ caller }) func getExperiences() : async [Experience] {
    experiences.values().toArray().sort();
  };

  // Contact Messages
  public shared ({ caller }) func submitMessage(name : Text, email : Text, message : Text) : async Nat {
    let contactMessage : ContactMessage = {
      id = nextId;
      name;
      email;
      message;
      timestamp = Time.now();
    };
    messages.add(nextId, contactMessage);
    nextId += 1;
    contactMessage.id;
  };

  public query ({ caller }) func getMessages() : async [ContactMessage] {
    messages.values().toArray().sort();
  };
};
