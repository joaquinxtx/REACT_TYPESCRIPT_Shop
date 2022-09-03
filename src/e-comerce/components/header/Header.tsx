import './Header.css'


interface HeaderInterface{
  title:String;
  subTitle?:String;
}

export const Header = ({title,subTitle}:HeaderInterface) => {
  return (
    <div className='headerbackground'>
      <div className='titlesContainer'>
        <div className='conteinerTitle'>
          <h1 className='titleHeader'>{title} </h1>
        </div>
        <div className='conteinerSubTitle'>
          <h2 className='subTitleHeader'>{subTitle} </h2>
        </div>
      </div>
      
      
    </div>
  )
}
