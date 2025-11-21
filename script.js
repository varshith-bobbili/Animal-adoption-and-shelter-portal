// Sample pet data
const pets = [
    {
        id: 1,
        name: 'Max',
        type: 'Dog',
        breed: 'Golden Retriever',
        age: '2 years',
        gender: 'Male',
        image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        description: 'Friendly and energetic, loves to play fetch and go for long walks.'
    },
    {
        id: 2,
        name: 'Luna',
        type: 'Cat',
        breed: 'Siamese',
        age: '1.5 years',
        gender: 'Female',
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80',
        description: 'Gentle and affectionate, enjoys cuddling and sunbathing by the window.'
    },
    {
        id: 3,
        name: 'Rocky',
        type: 'Dog',
        breed: 'Bulldog',
        age: '3 years',
        gender: 'Male',
        image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        description: 'Laid-back and friendly, great with kids and other pets.'
    },
    {
        id: 4,
        name: 'Milo',
        type: 'Cat',
        breed: 'Maine Coon',
        age: '4 months',
        gender: 'Male',
        image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: 'Playful kitten, very curious and loves to explore his surroundings.'
    },
    {
        id: 5,
        name: 'Bella',
        type: 'Dog',
        breed: 'Beagle',
        age: '5 years',
        gender: 'Female',
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        description: 'Sweet and gentle, great with kids and loves to go on adventures.'
    },
    {
        id: 6,
        name: 'Charlie',
        type: 'Rabbit',
        breed: 'Holland Lop',
        age: '1 year',
        gender: 'Male',
        image: 'https://images.unsplash.com/photo-1585969646097-a1b0038c37a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        description: 'Gentle and curious, loves fresh vegetables and hopping around.'
    }
];

// Function to create pet cards
function createPetCards() {
    const container = document.getElementById('pets-container');
    
    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card bg-white rounded-lg overflow-hidden shadow-md';
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}" class="w-full h-64 object-cover">
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-gray-800">${pet.name}</h3>
                    <span class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">${pet.type}</span>
                </div>
                <div class="text-sm text-gray-600 mb-3">
                    <p><span class="font-medium">Breed:</span> ${pet.breed}</p>
                    <p><span class="font-medium">Age:</span> ${pet.age}</p>
                    <p><span class="font-medium">Gender:</span> ${pet.gender}</p>
                </div>
                <p class="text-gray-700 mb-4">${pet.description}</p>
                <button onclick="showAdoptionForm(${pet.id})" class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                    Adopt ${pet.name}
                </button>
            </div>
        `;
        container.appendChild(petCard);
    });
}

// Function to show adoption form
function showAdoptionForm(petId) {
    const pet = pets.find(p => p.id === petId);
    if (!pet) return;
    
    const formHtml = `
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-lg max-w-md w-full p-6 relative">
                <button onclick="closeModal('adoption-modal')" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Adopt ${pet.name}</h3>
                <form id="adoption-form" class="space-y-4">
                    <div>
                        <label for="full-name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" id="full-name" required class="w-full p-2 border border-gray-300 rounded-md">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" required class="w-full p-2 border border-gray-300 rounded-md">
                    </div>
                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input type="tel" id="phone" required class="w-full p-2 border border-gray-300 rounded-md">
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Why would you like to adopt ${pet.name}?</label>
                        <textarea id="message" rows="3" required class="w-full p-2 border border-gray-300 rounded-md"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                        Submit Adoption Application
                    </button>
                </form>
            </div>
        </div>
    `;
    
    const modal = document.createElement('div');
    modal.id = 'adoption-modal';
    modal.innerHTML = formHtml;
    document.body.appendChild(modal);
    
    // Add form submission handler
    document.getElementById('adoption-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your interest in adopting ' + pet.name + '! We will contact you shortly.');
        closeModal('adoption-modal');
    });
    
    // Add escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal('adoption-modal');
        }
    });
}

// Function to show donation form
function showDonationForm() {
    const modal = document.createElement('div');
    modal.id = 'donation-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg w-full max-w-md">
            <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-2xl font-bold text-indigo-700">Make a Donation</h3>
                    <button onclick="closeModal('donation-modal')" class="text-gray-500 hover:text-gray-700">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <form id="donation-form" class="space-y-4">
                    <div>
                        <label for="amount" class="block text-sm font-medium text-gray-700 mb-1">Donation Amount (₹)</label>
                        <input type="number" id="amount" min="1" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter amount" required>
                    </div>
                    
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" id="name" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your name" required>
                    </div>
                    
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="your.email@example.com" required>
                    </div>
                    
                    <div>
                        <label for="card-number" class="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <input type="text" id="card-number" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="1234 5678 9012 3456" required>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="expiry" class="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                            <input type="text" id="expiry" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="MM/YY" required>
                        </div>
                        <div>
                            <label for="cvv" class="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                            <input type="text" id="cvv" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="123" required>
                        </div>
                    </div>
                    
                    <button type="submit" class="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300">
                        Donate Now
                    </button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add form submission handler
    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const amount = document.getElementById('amount').value;
            alert(`Thank you for your generous donation of ₹${amount}! Your support helps us care for animals in need.`);
            closeModal('donation-modal');
        });
    }
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.remove();
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createPetCards();
    
    // Add event listener for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Add event listener for donation button
    const donateButton = document.getElementById('donate-button');
    if (donateButton) {
        donateButton.addEventListener('click', showDonationForm);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
