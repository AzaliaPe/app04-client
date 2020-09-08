const baseUrl = 'http://localhost:5000/';

const GetTaquitos = ()=>
{
    const url = baseUrl;
    fetch(url)
    .then(data => data.json())
    .then(tacos => console.log(tacos));
};

const GetTaquito = id =>
{
    const url = `${baseUrl}${id}`;
    fetch(url)
    .then(data => data.json())
    .then(tacos => console.log(tacos));
};

const AddTaquito = taco =>
{
    const url = baseUrl;
    fetch(url, 
    {
        method: 'POST',
        body: JSON.stringify(taco),
        headers: 
        {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
    .then(taco => console.log(taco));
};

const UpdateTaquito = (id, data) =>
{
    const url = `${baseUrl}${id}`;
    fetch(url, 
    {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: 
        {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(taco => console.log(taco));
};

// GetTaquitos();
// GetTaquito(2);

// const showChanges = async ()=>
// {
//     await AddTaquito({
//         name: 'canasta',
//         quantity: 3,
//         pica: 'si'
//     }); 
//     GetTaquitos();
// }
// showChanges();

UpdateTaquito(1, {
    name: 'costillita',
    quantity: 6,
    pica: 'no'
});