import PropTypes from 'prop-types'

const Button = ({children,type,version,isDisabled}) => {
    return ( 

        <div>
            <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
                   
                    {children}

            </button>
        </div>    
            
     );
}
 
Button.defaultProps={
    version:'primary',
    type:'button',
    isDisabled:false
}

Button.PropType={
    childern:PropTypes.node.isRequired,
    version:PropTypes.string,
    type:PropTypes.string,
    isDisabled:PropTypes.bool
}
export default Button;