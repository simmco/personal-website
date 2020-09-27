import Nav from '../components/nav';
import Layout from '../components/layout';
import ExternalLink from '../components/icons/ExternalLink';
import Form from '../components/form';

export default function IndexPage() {
  return (
    <Layout>
      <div className="text-gray-700 text-lg">
        <div className="py-8">
          <p className="py-2">Hi! I'm Michael. 👋 </p>
          <p className="py-2">
            During normal business hours, I work at PayByPhone as a Software Engineer.
          </p>
          <p className="py-2">
            Being a Software Engineer, I try to focus writing clean, elegant and efficient Code.
            Working with HTML, CSS, TypeScript, React and Node.js
          </p>
          <p className="py-2">
            Outside of my working hours, you can find me travel the world 🌎, riding my bike 🚴,
            going for a run 🏃‍♂️ or reading a book 📚.
          </p>
        </div>

        <div className="py-8">
          <h3 className="font-medium text-xl text-gray-900">Techstack</h3>
          <ul className="p-2" style={{ columns: 2 }}>
            <li className="mb-2">
              <span className="rounded-lg bg-teal-300 px-2 py-1 text-white">HTML</span>
            </li>
            <li className="mb-2">
              <span className="rounded-lg bg-teal-300 px-2 py-1 text-white">CSS</span>
            </li>
            <li className="mb-2">
              <span className="rounded-lg bg-teal-300 px-2 py-1 text-white">TypeScript</span>
            </li>
            <li className="mb-2">
              <span className="rounded-lg bg-teal-300 px-2 py-1 text-white">JavaScript</span>
            </li>
            <li className="mb-2">
              <span className="rounded-lg bg-teal-300 px-2 py-1 text-white">React</span>
            </li>
            <li className="mb-2">
              <span className="rounded-lg bg-teal-300 px-2 py-1 text-white">Vue</span>
            </li>
            <li className="mb-2">
              <span className="rounded-lg bg-teal-300 px-2 py-1 text-white">Node.js</span>
            </li>
            <li className="mb-2">
              <span className="rounded-lg bg-teal-300 px-2 py-1 text-white">NoSQL</span>
            </li>
            <li className="mb-2">
              <span className="rounded-lg bg-teal-300 px-2 py-1 text-white">JamStack</span>
            </li>
            <li className="mb-2">
              <span className="rounded-lg bg-teal-300 px-2 py-1 text-white">Lambda/Serverless</span>
            </li>
          </ul>
        </div>

        <div className="py-8">
          <h3 className="font-medium text-xl text-gray-900">Work experience</h3>
          <div className="py-2">
            <div className="flex justify-between">
              <h6 className="text-teal-500 font-medium">
                <a className="flex" href="https://www.paybyphone.com/" target="_blank">
                  <span className="pr-1">PayByPhone</span>
                  <span className="flex items-center">
                    <ExternalLink />
                  </span>
                </a>
              </h6>
              <p className="text-gray-900 text-sm font-medium">01/2020 - Present</p>
            </div>
            <p className="text-sm">Vancouver / Canada</p>
            <ul className="p-2">
              <li>- Migrated legacy codebase from AngularJS to React.js</li>
              <li>- Build reusable UI Components based on PayByPhone guidelines</li>
              <li>- Introduced / implemented state machines for complex flows</li>
            </ul>
          </div>
          <div className="py-2">
            <div className="flex justify-between">
              <h6 className="text-teal-500 font-medium">
                <a className="flex" href="https://www.pdm-automotive.com" target="_blank">
                  <span className="pr-1">Paramount Data Managment</span>
                  <span className="flex items-center">
                    <ExternalLink />
                  </span>
                </a>
              </h6>
              <p className="text-gray-900 text-sm font-medium">01/2018 - 12/2019</p>
            </div>
            <p className="text-sm">Munich / Germany</p>
            <ul className="p-2">
              <li>
                - Simplified an overly-complex user interface, while preserving all functionality.
              </li>
              <li>- Introduced a design system based on Ant Design.</li>
              <li>
                - Closely worked with back-end developers to optimize existing Web technology.
              </li>
              <li>- Rewriting key features and improve performance.</li>
              <li>- Initiated and migrated codebase to TypeScript.</li>
            </ul>
          </div>
          <div className="py-2">
            <div className="flex justify-between">
              <h6 className="text-teal-500 font-medium">
                <a className="flex" href="https://goessential.com/" target="_blank">
                  <span className="pr-1">GoEssential Inc.</span>
                  <span className="flex items-center">
                    <ExternalLink />
                  </span>
                </a>
              </h6>
              <p className="text-gray-900 text-sm font-medium">06/2017 - 11/2017</p>
            </div>
            <p className="text-sm">Remote</p>

            <ul className="p-2">
              <li>
                - Implemented in-app feature for live streaming event with endpoint to the YouTube
                API.
              </li>
              <li>- Engineered Live Chat with WebSocket.</li>
              <li>- Created new UI for editing video segments.</li>
            </ul>
          </div>
        </div>

        <div className="py-8">
          <h3 className="font-medium text-xl text-gray-900">Projects</h3>

          <ul className="p-2">
            <li>
              -{' '}
              <a
                className="text-teal-500"
                href="https://schwimmschule.diekaulquappe.de/"
                target="_blank"
              >
                Schwimmschule Die Kaulquappe
              </a>
            </li>
            <li>
              -{' '}
              <a
                className="text-teal-500"
                href="https://lit-brook-10809.herokuapp.com/"
                target="_blank"
              >
                Trading Book Store
              </a>
            </li>
            <li>
              -{' '}
              <a
                className="text-teal-500"
                href="https://simmco.github.io/pinterest-clone/#/"
                target="_blank"
              >
                Pinterest Clone
              </a>
            </li>
            <li>
              -{' '}
              <a
                className="text-teal-500"
                href="https://simmco.github.io/localWeather/"
                target="_blank"
              >
                Local Weather
              </a>
            </li>
            <li>
              -{' '}
              <a className="text-teal-500" href="https://github.com/simmco" target="_blank">
                Check Github for more..
              </a>
            </li>
          </ul>
        </div>

        <div className="py-8">
          <h3 className="font-medium text-xl text-gray-900">Get in touch</h3>
          <Form />
        </div>
      </div>
    </Layout>
  );
}
