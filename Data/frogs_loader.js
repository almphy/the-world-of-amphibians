let init =
{
    method: 'GET',
    headers:
    {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};

let json_request = new Request("../Data/frogs.json", init);

fetch(json_request)
    .then (function(resp)
    {
        return resp.json();
    })
    .then (function(frogs)
    {
        const food_items = frogs[frog_id]['diet'].length;

        document.getElementById('name').innerHTML = frogs[frog_id]['name'];
        document.getElementById('scientific-name').innerHTML = frogs[frog_id]['scientific-name'];
        document.getElementById('place-of-origin').innerHTML = frogs[frog_id]['place-of-origin'];
        document.getElementById('habitat').innerHTML = frogs[frog_id]['habitat'];

        for (let i = 0; i < food_items; i++)
        {
            if (i == 4)
            {
                document.getElementById('diet').innerHTML += frogs[frog_id]['diet'][i];
            }
            else
            {
                document.getElementById('diet').innerHTML += frogs[frog_id]['diet'][i] + ", <br>";
            }
        }

        document.getElementById('life-span').innerHTML = frogs[frog_id]['life-span'];
        document.getElementById('description').innerHTML = frogs[frog_id]['description'];
    });