data-theme= "light"
// GrandChild-এ ডেটা পাঠাতে Parent & Child দুটো দিয়েই পাস করতে হচ্ছে
<Parent theme="dark">
  <Child theme="dark">
    <GrandChild theme="dark" />
  </Child>
</Parent>
// ১. Context তৈরি
const ThemeContext = React.createContext();

// ২. Provider দিয়ে পুরো অ্যাপে ডেটা এভেইলএবল করা
<ThemeContext.Provider value="dark">
  <GrandChild /> 
</ThemeContext.Provider>

// ৩. যেকোনো ডিপ বা নিচের Component থেকে সরাসরি ব্যবহার
function GrandChild() {
  const theme = useContext(ThemeContext); // সরাসরি 'dark' পেয়ে যাবে
  return <div>Current Theme: {theme}</div>;
}