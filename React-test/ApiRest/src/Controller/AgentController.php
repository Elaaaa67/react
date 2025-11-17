<?php

namespace App\Controller;

use App\Entity\Agent;
use App\Repository\AgentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/agent', name: 'app_agent_')]
final class AgentController extends AbstractController
{
    private AgentRepository $agentRepository;
    private EntityManagerInterface $em;

    public function __construct(AgentRepository $agentRepository, EntityManagerInterface $em)
    {
        $this->agentRepository = $agentRepository;
        $this->em = $em;
    }

    private function toArray(Agent $agent): array
    {
        return [
            'uuid' => $agent->getUuid(),
            'display_name' => $agent->getDisplayName(),
            'role' => $agent->getRole(),
            'full_portrait' => $agent->getFullPortrait(),
            'release_date' => $agent->getReleaseDate()?->format('Y-m-d'),
            'description' => $agent->getDescription(),
        ];
    }

    #[Route('', name: 'list', methods: ['GET'])]
    public function list(): JsonResponse
    {
        $agents = $this->agentRepository->findAll();
        $data = array_map(fn(Agent $a) => $this->toArray($a), $agents);

        return $this->json($data, 200);
    }

    #[Route('/{uuid}', name: 'agent_detail', methods: ['GET'])]
    public function detail(string $uuid): Response
    {
        $agent = $this->agentRepository->findOneBy(['uuid' => $uuid]);

        if (!$agent) {
            return $this->json(['error' => 'Agent introuvable'], 404);
        }

        return $this->json($this->toArray($agent));
    }

    #[Route('/create', name: 'create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!is_array($data)) {
            return $this->json(['error' => 'Invalid JSON'], 400);
        }

        foreach (['uuid', 'display_name', 'role', 'full_portrait', 'release_date'] as $field) {
            if (empty($data[$field])) {
                return $this->json(['error' => "Missing field: $field"], 400);
            }
        }

        $agent = new Agent();
        $agent->setUuid($data['uuid']);
        $agent->setDisplayName($data['display_name']);
        $agent->setRole($data['role']);
        $agent->setFullPortrait($data['full_portrait']);
        $agent->setReleaseDate(new \DateTime($data['release_date']));
        $agent->setDescription($data['description']);

        $this->em->persist($agent);
        $this->em->flush();

        return $this->json(['message' => 'Agent created successfully'], 201);
    }

    #[Route('/update/{id}', name: 'update', methods: ['PUT'])]
    public function update(int $id, Request $request): JsonResponse
    {
        $agent = $this->agentRepository->find($id);

        if (!$agent) {
            return $this->json(['message' => 'Agent not found'], 404);
        }

        $data = json_decode($request->getContent(), true);
        if (!is_array($data)) {
            return $this->json(['error' => 'Invalid JSON'], 400);
        }

        $agent->setDisplayName($data['display_name'] ?? $agent->getDisplayName());
        $agent->setRole($data['role'] ?? $agent->getRole());
        $agent->setFullPortrait($data['full_portrait'] ?? $agent->getFullPortrait());

        if (!empty($data['release_date'])) {
            $agent->setReleaseDate(new \DateTime($data['release_date']));
        }

        $this->em->flush();

        return $this->json(['message' => 'Agent updated successfully'], 200);
    }

    #[Route('/delete/{id}', name: 'delete', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        $agent = $this->agentRepository->find($id);

        if (!$agent) {
            return $this->json(['message' => 'Agent not found'], 404);
        }

        $this->em->remove($agent);
        $this->em->flush();

        return $this->json(['message' => 'Agent deleted successfully'], 200);
    }

   
}
