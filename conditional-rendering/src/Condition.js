function Condition(prop) {
    return (
        <div>
            {prop.val == 0 ? 'You entered 0!' : 'You entered other number'}
        
            {/* {prop.val == 0 && 'You entered 0!'}
            {prop.val != 0 && `You entered`} */}
        </div>
    );
};

export default Condition;