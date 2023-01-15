import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";
const HomePage = (props) => {
	return (
		<div>
			<ul>{<EventList items={props.featuredEvents} />}</ul>
		</div>
	);
};

export default HomePage;

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			featuredEvents: featuredEvents,
		},
	};
}
