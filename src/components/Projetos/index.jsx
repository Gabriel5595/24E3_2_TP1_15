import "./style.css"

export default function Projetos() {
    const projects = [
        { title: 'Projeto 1', description: 'Descrição breve do projeto 1' },
        { title: 'Projeto 2', description: 'Descrição breve do projeto 2' },
        { title: 'Projeto 3', description: 'Descrição breve do projeto 3' },
    ];
    
    return(
        <div>
            <h2>Projetos</h2>
            <ul>
                {projects.map((project, index) => (
                <li key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}