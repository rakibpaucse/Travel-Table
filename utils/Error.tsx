import Style from '../utils/title/title.module.scss'
export default function Error({msg='There was an error occured!'}) {
    return (
        <div className={Style.ErrorHolder} >

            {msg}
        </div>
    );
}