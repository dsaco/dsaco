import React, { useState } from 'react';

import Button from '../components/Button';
import Notice from '../components/Notice';
import Message from '../components/Message';
import lorem from 'lorem-ipsum';
import ProgressApi from '../components/Progress';

export default function App() {
	const [visible, set] = useState(false);
	return (
		<>
			<Button
				onClick={() => {
					// Message.info(lorem().slice(0, 10));
                    // set((prev) => !prev);
                    ProgressApi.start();
				}}
			>
				start
			</Button>
			<Button
				onClick={() => {
					// Message.info(lorem().slice(0, 10));
                    // set((prev) => !prev);
                    ProgressApi.done();
				}}
			>
				done
			</Button>
			{/* <Button link>what</Button>
            <Button outline>what</Button>
            <Button disabled>what</Button>
            <hr />
            <Button type="primary">what</Button>
            <Button type="primary" link>what</Button>
            <Button type="primary" outline>what</Button>
            <Button type="primary" disabled>what</Button>
            <hr />
            <Button type="secondary">what</Button>
            <Button type="secondary" link>what</Button>
            <Button type="secondary" outline>what</Button>
            <Button type="secondary" disabled>what</Button>
            <hr />
            <Button type="purple">what</Button>
            <Button type="purple" link rippleColor="rgba(128, 0, 128, .25)">what</Button>
            <Button type="purple" outline rippleColor="rgba(255, 0, 128, .25)">what</Button>
            <Button type="purple" disabled>what</Button> */}
		</>
	);
}
