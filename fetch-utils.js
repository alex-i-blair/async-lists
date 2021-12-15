const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNDg0OSwiZXhwIjoxOTU1MDgwODQ5fQ.ndQWiNzif11lNLX2XRymcinqAJVc0yd6aSPbFUGUYhU';

const SUPABASE_URL = 'https://zgbprbkdttsognqmlxlt.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCocktails() {
    const response = await client
        .from('Cocktails')
        .select();

    return response.data;
}

export async function getSazSpecs() {
    const response = await client
        .from('Sazerac')
        .select();
    return response.data;

}

export async function getWhiskeySourSpecs() {
    const response = await client
        .from('whiskey_sour')
        .select();
    return response.data;
}