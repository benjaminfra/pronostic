create table "public"."profiles" (
    "user_id" uuid not null,
    "username" character varying not null default ''::character varying
);

alter table "public"."profiles" enable row level security;
CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (user_id);
alter table "public"."profiles" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";
alter table "public"."profiles" add constraint "profiles_user_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;
alter table "public"."profiles" validate constraint "profiles_user_fkey";

create policy "Profiles are viewable, editable, deletable by users who created them."
on profiles for all
using ( auth.uid() = user_id );

CREATE POLICY "Enable insert for users based on user_id" ON "public"."profiles"
AS PERMISSIVE FOR INSERT
TO public
WITH CHECK (true)