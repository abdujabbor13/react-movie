

































// import React, {useState} from 'react';
// export default function Search({searchMovies}) {
//   const [search, setSearch] = useState('panda')
//   const [type, setType] = useState('all')

//   const handleKey = (e) => {
//     if(e.key === 'Enter'){
//       searchMovies(search, type)
//     }
//   }

//   const handleFilter = (e) => {
//     setType(() => (e.target.dataset.type), () => {
//       searchMovies(search, e.target.dataset.type)
//     })
//   }

//     return (
//       <div>
//         <div className="row">
//           <div className="col s12">
//             <div className="input-field">
//               <input
//                 placeholder="search"
//                 type="search"
//                 className="validate"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 onKeyDown={handleKey}
//               />
//               <button
//                 className="btn search-btn"
//                 onClick={() => searchMovies(search, type)}>
//                 search movies
//               </button>
//             </div>
//             <div>
//               <label>
//                 <input
//                   className="with-gap"
//                   name="type" type="radio"
//                   data-type="all"
//                   onChange={handleFilter}
//                   checked={type === 'all'}
//                   />
//                   <span>All</span>
//               </label>

//               <label>
//                 <input
//                   className="with-gap"
//                   name="type" type="radio"
//                   data-type="movie"
//                   onChange={handleFilter}
//                   checked={type === 'movie'}
//                   />
//                   <span>movies only</span>
//               </label>

//               <label>
//                 <input
//                   className="with-gap"
//                   name="type" type="radio"
//                   data-type="series"
//                   onChange={handleFilter}
//                   checked={type === 'series'}
//                   />
//                   <span>series only</span>
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }



























// import React, {useState} from 'react';

//   export default function Search({searchMovies}) {
//     const [search, setSearch] = useState('panda')
//     const [type, setType] = useState('all')


//   const handleKey = (e) => {
//     if(e.key === 'Enter'){
//       searchMovies(search, type)
//     }
//   }

//   const handleFilter = (e) => {
//     setType(e.target.dataset.type)
//     searchMovies(search, e.target.dataset.type)
//   }

//   return (
//     <div>
//       <div className="row">
//         <div className="col s12">
//           <div className="input-field">
//             <input
//               placeholder="search"
//               type="search"
//               className="validate"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               onKeyDown={handleKey}
//             />
//             <button
//               className="btn search-btn"
//               onClick={() => searchMovies(search, type)}>
//               search movies
//             </button>
//           </div>
//           <div>
//             <label>
//               <input
//                 className="with-gap"
//                 name="type" type="radio"
//                 data-type="all"
//                 onChange={handleFilter}
//                 checked={type === 'all'}
//                 />
//                 <span>All</span>
//             </label>

//             <label>
//               <input
//                 className="with-gap"
//                 name="type" type="radio"
//                 data-type="movie"
//                 onChange={handleFilter}
//                 checked={type === 'movie'}
//                 />
//                 <span>movies only</span>
//             </label>

//             <label>
//               <input
//                 className="with-gap"
//                 name="type" type="radio"
//                 data-type="series"
//                 onChange={handleFilter}
//                 checked={type === 'series'}
//                 />
//                 <span>series only</span>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
