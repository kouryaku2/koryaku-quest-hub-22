-- Step 1: Fix RLS Policies - Remove the problematic existing policy and create proper secure policies

-- Drop the existing policy that has security issues
DROP POLICY IF EXISTS "Allow individual user access" ON public.users;

-- Create separate, secure policies for each operation

-- SELECT policy: Users can only view their own data
CREATE POLICY "users_select_own_data" 
ON public.users 
FOR SELECT 
TO authenticated
USING (auth.uid() = id);

-- INSERT policy: Users can only insert their own data during signup
CREATE POLICY "users_insert_own_data" 
ON public.users 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = id);

-- UPDATE policy: Users can only update their own data
CREATE POLICY "users_update_own_data" 
ON public.users 
FOR UPDATE 
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- DELETE policy: Users can only delete their own data
CREATE POLICY "users_delete_own_data" 
ON public.users 
FOR DELETE 
TO authenticated
USING (auth.uid() = id);