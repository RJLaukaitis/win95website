import react from 'react';
import './StartMenu.css';

function StartMenu(){
    const handleShutdown = () => {
        /*Add shutdown logic */
        console.log('Shutting down');
    };

return (
    <div className="start-menu">
        {/*Add other menu items here */}
        <button onClick={handleShutdown}>Shut Down</button>
    </div>
);
}

export default StartMenu;