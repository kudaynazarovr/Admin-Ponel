import { Dropdown } from 'antd';

export const FormPageInputBottom = () => {
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Select a country
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    United State
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Canada
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    United Kingdom
                </a>
            ),
        },
        {
            key: '5',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Australia
                </a>
            ),
        },
        {
            key: '7',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Germany
                </a>
            ),
        },
        {
            key: '8',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    France
                </a>
            ),
        },
    ];
    return (
        <>
            <div className="bg-white shadow-[0px_0px_39px_0px_rgba(34,60,80,0.2)] w-[50%] rounded-2xl p-4 flex flex-col  gap-y-4 mt-5 h-[500px]">
                <p className="font-bold text-[20px]">Select Dropdown</p>
                <div className='h-[33%]  flex items-center'>
                    <Dropdown menu={{ items }} arrow>
                        <button className='p-3 border border-gray-400 rounded-2xl w-full'>Select a country</button>
                    </Dropdown>
                </div>
                <div className='h-[33%] flex items-center'>
                    <Dropdown menu={{ items }} arrow>
                        <button className='p-3 border border-gray-400 rounded-2xl w-full'>Select a role</button>
                    </Dropdown>
                </div>
                <div className='h-[33%] flex items-center'>
                    <Dropdown menu={{ items }} arrow>
                        <button className='p-3 border border-gray-400 rounded-2xl w-full'>Select a timezone</button>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}