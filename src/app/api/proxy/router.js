export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const chassisNo = searchParams.get('chassisNo');

    const apiUrl = `https://car.itqan.win/fetch-car-data?chassisNo=${chassisNo}`;

    try {
        const apiResponse = await fetch(apiUrl);
        const data = await apiResponse.json();

        return new Response(JSON.stringify(data), {
            status: apiResponse.status,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
