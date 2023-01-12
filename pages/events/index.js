import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
	const events = getAllEvents();
	const router = useRouter();

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	};
	return (
		<>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
};

export default AllEventsPage;
