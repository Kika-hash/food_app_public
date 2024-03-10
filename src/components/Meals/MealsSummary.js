import classes from "./MealsSummary.module.css"

const MealsSummary = () => {
    return <section className={classes.summary}>
        <h2>Sery z Bełsznicy są najlepsze</h2>
        <p>
        Sery podpuszczkowe z małego gospodarstwa rolnego w Bełsznicy (spod czeskiej granicy)
      </p>
      <p>
      Świeżo robione, naturalne, na legalu (Sanepid czuwa). Dostawa do firmy raz w tygodniu
      </p>
    </section>
};

export default MealsSummary;