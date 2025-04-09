import React from 'react';

const ServicesCards = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100">
            <div className="bg-white rounded shadow p-4 w-full">
                <div className="mb-2">
                    <img src="/service1.jpg" alt="Service 1" className="w-full h-40 object-cover rounded" />
                </div>
                <p className="text-gray-700 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor hic est dolores doloremque iure. Vitae sit id nostrum!
                </p>
            </div>

            <div className="bg-white rounded shadow p-4 w-full">
                <div className="mb-2">
                    <img src="/service2.png" alt="Service 2" className="w-full h-40 object-cover rounded" />
                </div>
                <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis id doloremque fugit laborum reiciendis.
                </p>
            </div>

            <div className="bg-white rounded shadow p-4 w-full">
                <div className="mb-2">
                    <img src="/service3.png" alt="Service 3" className="w-full h-40 object-cover rounded" />
                </div>
                <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptates alias harum consectetur labore veniam.
                </p>
            </div>
            
        </div>
    );
};

export default ServicesCards;

