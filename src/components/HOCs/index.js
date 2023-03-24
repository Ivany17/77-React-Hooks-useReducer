import { ThemeContext } from "../../context";
// HOC - High Order Component
export const WithTheme = InnerComponent => {
    return (props) => {
    return (
        <ThemeContext.Consumer>{
            ([theme, setTheme]) =>  (<InnerComponent theme = {theme} setTheme={setTheme} />)
        }</ThemeContext.Consumer>
    );        
}}