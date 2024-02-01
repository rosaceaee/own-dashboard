const User = ({ user }) => {
  return (
    <>
      {user.a}
      <section className="container usr">
        <img src="https://rosaceaee.github.io/static/media/profile.4e801877b433561fc967.png" />
        <h1>버그없는 날 되세요</h1>

        <section className="feeling">
          <h1>오늘은 어때?</h1>
          <form>
            <button value="good"></button>
            <button value="normal"></button>
            <button value="bad"></button>
          </form>
        </section>
      </section>
    </>
  );
};

export default User;
