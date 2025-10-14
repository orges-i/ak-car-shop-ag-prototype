/*
  # Create Google Reviews Table

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key) - Unique identifier for each review
      - `author_name` (text) - Name of the reviewer
      - `rating` (integer) - Star rating (1-5)
      - `review_text` (text) - The actual review content
      - `review_date` (text) - Date of the review
      - `is_featured` (boolean) - Whether to feature this review prominently
      - `created_at` (timestamptz) - When the review was added to the database
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `reviews` table
    - Add policy for public read access (reviews are public information)
    - Add policy for authenticated insert/update (for admin management)
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  review_date text NOT NULL,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view reviews"
  ON reviews
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert reviews"
  ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update reviews"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete reviews"
  ON reviews
  FOR DELETE
  TO authenticated
  USING (true);