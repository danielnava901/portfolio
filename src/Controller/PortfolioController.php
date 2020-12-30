<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/portfolio", name="portfolio")
 */
class PortfolioController extends AbstractController
{
    /**
     * @Route("/", name="portfolio_home")
     */
    public function home(): Response
    {
        return $this->render(
        'portfolio/home.html.twig',
            [
                'controller_name' => 'Home',
            ]
        );
    }

    /**
     * @Route("/crm", name="portfolio_crm")
     */
    public function crm(): Response
    {
        return $this->render(
            'portfolio/home.html.twig',
            [
                'controller_name' => 'Crm',
            ]
        );
    }
}
