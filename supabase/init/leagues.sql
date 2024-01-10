create table
  public.leagues (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    name text not null,
    author_id uuid not null,
    constraint leagues_pkey primary key (id),
    constraint leagues_author_id_fkey foreign key (author_id) references profiles (user_id)
  ) tablespace pg_default;

CREATE POLICY "read_access"
ON public.leagues
FOR SELECT USING (
  true
);

CREATE POLICY "insert_access"
ON public.leagues
FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "update_author_only"
ON public.leagues
FOR UPDATE USING (
  auth.uid() = author_id
)  WITH CHECK (
  auth.uid() = author_id
);


CREATE POLICY "delete_author_only"
ON public.leagues
FOR DELETE USING (
  auth.uid() = author_id
)