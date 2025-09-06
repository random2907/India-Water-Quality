import fs from 'fs/promises';

const url = 'https://rtwqmsdb1.cpcb.gov.in/data/internet/layers/10/index.json';

async function fetchRealtimeData() {
        try {
                const res = await fetch(url);
                const data = await res.json();
                await fs.writeFile('live.json', JSON.stringify(data, null, 4));
                console.log('Saved live.json successfully.');
        } catch (err) {
                console.error('Error fetching data:', err);
        }
}

fetchRealtimeData();

