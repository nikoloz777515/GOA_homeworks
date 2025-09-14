function About() {
  const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_9lThdPEWV636H6Qghk_FeRyhprldJP2qg&s"; // აქ შეგიძლია ჩაწერო შენი სურათის მისამართი
  
  return (
    <section>

      <p>This website is created to demonstrate a simple React project structure with multiple components.</p>
      <img src={image}/>
    </section>
  );
}

export default About;
