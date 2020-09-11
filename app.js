const baseUrl = 'http://localhost:5000/';
const taquitosList = document.getElementById('taquitos-list');

const GetTaquitos = async() =>
{
    const reponse = await fetch(`${baseUrl}`);
    const data = await reponse.json();
    // console.log(data);
    const tacoArr = data.map(element =>
    {
        // console.log(element);
        const{id, name, quantity, pica} = element;
        console.log(id, name, quantity, pica);
        return {taquitoId: id, taquitoName: name, taquitoQuantity: quantity, taquitoPica: pica};   
    });
    tacoArr.forEach(element => 
    {
        taquitosList.innerHTML += 
        `<li>
            <div>Id: ${element.taquitoId}</div>
            <ul>
                <div>Name: ${element.taquitoName}</div>
                <div>Quantity: ${element.taquitoQuantity}</div>
                <div>Pica: ${element.taquitoPica}</div>
            </ul><br>
        </li>`;
    });
};
GetTaquitos();
// GetTaquitos(2);

// const AddTaquito = taco =>
// {
//     const url = baseUrl;
//     fetch(url, 
//     {
//         method: 'POST',
//         body: JSON.stringify(taco),
//         headers: 
//         {
//             'Content-Type': 'application/json'
//         }
//     }).then(data => data.json())
//     .then(taco => console.log(taco));
// };

// const UpdateTaquito = (id, data) =>
// {
//     const url = `${baseUrl}${id}`;
//     fetch(url, 
//     {
//         method: 'PUT',
//         body: JSON.stringify(data),
//         headers: 
//         {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(taco => console.log(taco));
// };

// const DeleteTaquito = (id) =>
// {
//     const url = `${baseUrl}${id}`;
//     fetch(url, 
//     {
//         method: 'Delete',
//     })
// }

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

// UpdateTaquito(1, {
//     name: 'costillita',
//     quantity: 6,
//     pica: 'no'
// });

// DeleteTaquito(2,
// {

// });