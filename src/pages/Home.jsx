const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div>
      <h1 style={styles.container}>
        Phone manager welcome page
        <span style={styles.title}>💁‍♀️</span>
      </h1>
    </div>
  );
}
