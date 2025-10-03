import { type User, type InsertUser, type Event } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getEvents(): Promise<Event[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private events: Event[];

  constructor() {
    this.users = new Map();
    this.events = this.generateMockEvents();
  }

  private generateMockEvents(): Event[] {
    return [
      {
        id: "1",
        title: "Boston Marathon 2025",
        type: "Marathon",
        date: "2025-04-21",
        location: "Boston, MA",
        distance: "26.2 miles",
        tags: ["Marathon", "Road", "Qualifier", "World Major"],
        source: "baa",
        url: "https://www.baa.org",
      },
      {
        id: "2",
        title: "Ironman Lake Placid",
        type: "Triathlon",
        date: "2025-07-27",
        location: "Lake Placid, NY",
        distance: "140.6 miles",
        tags: ["Triathlon", "Ironman", "Full Distance"],
        source: "ironman",
        url: "https://www.ironman.com",
      },
      {
        id: "3",
        title: "New York City Marathon",
        type: "Marathon",
        date: "2025-11-02",
        location: "New York, NY",
        distance: "26.2 miles",
        tags: ["Marathon", "Road", "World Major"],
        source: "nyrr",
        url: "https://www.tcsnycmarathon.org",
      },
      {
        id: "4",
        title: "Chicago Marathon",
        type: "Marathon",
        date: "2025-10-12",
        location: "Chicago, IL",
        distance: "26.2 miles",
        tags: ["Marathon", "Road", "World Major", "Fast Course"],
        source: "chicagomarathon",
        url: "https://www.chicagomarathon.com",
      },
      {
        id: "5",
        title: "Ironman 70.3 World Championship",
        type: "Triathlon",
        date: "2025-09-07",
        location: "Taupo, New Zealand",
        distance: "70.3 miles",
        tags: ["Triathlon", "Half Distance", "Championship"],
        source: "ironman",
        url: "https://www.ironman.com",
      },
      {
        id: "6",
        title: "Leadville Trail 100",
        type: "Ultra",
        date: "2025-08-16",
        location: "Leadville, CO",
        distance: "100 miles",
        tags: ["Ultra", "Trail", "Mountain"],
        source: "leadville",
        url: "https://www.leadvilleraceseries.com",
      },
      {
        id: "7",
        title: "Tour de France Gran Fondo",
        type: "Cycling",
        date: "2025-07-05",
        location: "France",
        distance: "100 km",
        tags: ["Cycling", "Gran Fondo", "Road"],
        source: "letour",
        url: "https://www.letour.fr",
      },
      {
        id: "8",
        title: "Spartan Race World Championship",
        type: "Obstacle Race",
        date: "2025-11-15",
        location: "Sparta, Greece",
        distance: "13.1+ miles",
        tags: ["Obstacle Race", "Championship", "Elite"],
        source: "spartan",
        url: "https://www.spartan.com",
      },
      {
        id: "9",
        title: "Berlin Marathon",
        type: "Marathon",
        date: "2025-09-28",
        location: "Berlin, Germany",
        distance: "26.2 miles",
        tags: ["Marathon", "Road", "World Major", "Fast Course"],
        source: "bmw-berlin-marathon",
        url: "https://www.bmw-berlin-marathon.com",
      },
      {
        id: "10",
        title: "Kona Ironman World Championship",
        type: "Triathlon",
        date: "2025-10-11",
        location: "Kona, HI",
        distance: "140.6 miles",
        tags: ["Triathlon", "Ironman", "World Championship"],
        source: "ironman",
        url: "https://www.ironman.com",
      },
      {
        id: "11",
        title: "Western States 100",
        type: "Ultra",
        date: "2025-06-28",
        location: "Olympic Valley, CA",
        distance: "100 miles",
        tags: ["Ultra", "Trail", "Mountain"],
        source: "wser",
        url: "https://www.wser.org",
      },
      {
        id: "12",
        title: "Tokyo Marathon",
        type: "Marathon",
        date: "2025-03-02",
        location: "Tokyo, Japan",
        distance: "26.2 miles",
        tags: ["Marathon", "Road", "World Major"],
        source: "marathon.tokyo",
        url: "https://www.marathon.tokyo",
      },
    ];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getEvents(): Promise<Event[]> {
    return this.events;
  }
}

export const storage = new MemStorage();
