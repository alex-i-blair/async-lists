const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNDg0OSwiZXhwIjoxOTU1MDgwODQ5fQ.ndQWiNzif11lNLX2XRymcinqAJVc0yd6aSPbFUGUYhU';

const SUPABASE_URL = "https://zgbprbkdttsognqmlxlt.supabase.co"

const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

export async function getCocktails() {
    const response = await client
        .from('Cocktails')
        .select();

    console.log(response.data);
    return response.data;
}