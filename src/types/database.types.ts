export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      matchs: {
        Row: {
          api_id: number | null;
          city: string | null;
          created_at: string | null;
          date: string | null;
          id: number;
          league: string | null;
          team_a: string | null;
          team_b: string | null;
          venue: string | null;
        };
        Insert: {
          api_id?: number | null;
          city?: string | null;
          created_at?: string | null;
          date?: string | null;
          id?: number;
          league?: string | null;
          team_a?: string | null;
          team_b?: string | null;
          venue?: string | null;
        };
        Update: {
          api_id?: number | null;
          city?: string | null;
          created_at?: string | null;
          date?: string | null;
          id?: number;
          league?: string | null;
          team_a?: string | null;
          team_b?: string | null;
          venue?: string | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          user_id: string;
          username: string;
        };
        Insert: {
          user_id: string;
          username?: string;
        };
        Update: {
          user_id?: string;
          username?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_user_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type Enums<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];
