const container = document.getElementById('container');
const loadPublications=async()=>{
    const response=await fetch('https://my.api.mockaroo.com/user.json?key=d0f7a7e0');
    const data=await response.json();
    
    data.forEach(publication=>{
        container.innerHTML += `
        <div class="w-4/5 p-7 rounded-xl drop-shadow-xl h-[calc(100vh-50vh)] m-auto mb-5 bg-white dark:bg-neutral-900 text-black dark:text-white">
            <div class="flex items-center space justify-between">
                <div class="flex items-center">
                    <img src="${publication.avatar}" class="rounded-2xl"/>
                    <div class="text-blue-500">
                        <p class="font-bold ml-2 text-black dark:text-white">${publication.name}</p>
                        <p class="ml-2">${publication.date}</p>
                    </div>
                </div>
                <div class="text-2xl text-center text-gray-300">
                <i class="bi bi-sliders"></i>
                </div>
            </div>
            <div class="w-full my-5">
                <p class="font-semibold">${publication.description}</p>
            </div>
            <div class="w-full text-center">
                <img src="${publication.image}" width="150" class="m-auto">
            </div>
        </div>
        `
    });
}
loadPublications();